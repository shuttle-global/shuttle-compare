# fn-amountdue

amount_due_bolton: {
	features: ["INVOICE_SOURCE", "POST_PAYMENT", "POST_FEE"]
}

Where:
	INVOICE_SOURCE: Given a invoice.alt_key, will return an `invoice` object
		Endpoint: 
			GET /invoice/:id
	POST_PAYMENT: Given a invoice.alt_key, can write a  payment against that invoice
	POST_FEE: Given a invoice.alt_key, can write a part payment against that invoice


## getBankAccounts(context, request)

For accounting packages with feature POST_PAYMENT or POST_FEE, return a list of accounts that can be used to post these into. This API does not support pagination so amountdue-accounting-impl may need to gather multiple pages from the accounting package and return as a single list (we had this problem with Quickbooks)

Where:
request: {
	domain:
	client:
	api_key:
	bolton_key
	bolton_code
	shared_values: // Config shared across clients
	client_values: // Do not use
	amountdue_values: // Connection values
	// specific to this request
	type: PAYMENT / FEE
	limit: // default 1000
	offset: // default 0
}

Where:
  type=PAYMENT // Bank accounts and UNDEPOSITED FUNDS, see documentation for accounting platform which accounts can be used for invoice payments (eg EnablePaymentsToAccount in Xero)
  type=FEE // Expense accounts, see documentation for fee platform which accounts can be used for invoice payments

Response:
{
  bank_accounts: [{
    id: "PK", // Primary Key
    code: "Display ID", // The ID thats shown to the user
    name: "Primary Account", // The name thats shown to the user
    currency: "GBP" // currency of the account (if available)
  }]
}

## getContacts

Returns a list of all contacts that are a "customer" (vs "supplier") from the accounting package, where the package cant differentiate customers from suppliers, return all people. This API supports paging through multiple pages of data (note, you will need to emulate limit&offset capability if the accounting package supports a different mechanism eg page_number).

Query Parameters:

  limit= // how many records to return (default 20 - we'll generally use 20 or 100)
  offset= // how many records to skip (default 0)
  contact_id_or_ref= // filter for an exact match on the contact_id, or reference if the accounting package supports a reference on a person - This will be used ALOT
  updated_after= // only return records updated (ie modified) after (ie > not >=) the date passed (in standard JSON format (eg new Date().toJSON()).
  order= // created (default) / updated

As we might need to page through several pages of data, order by a key like created date (asc) so any amends dont mess up our paging.


Response:

{
  limit: 20,
  offset: 0,
  total: 99, // where available, else omit
  contacts: [{
    contact_id: "", // internal primary key
    reference: "", // If a secondary reference available eg "1001" vs a GUID (ie displayed AK) else omit
    name: "", // Display name of the record - can we deprecate?,
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    phone: ""
    address: {
      line1: "", // street 1 - we use lines1-6, as some countries we map these different.
      line2: "", // street 2
      line3: "", // street 3
      line4: "", // city
      line5: "", // zip/postcode
      line6: "" // state
      country: "" // 2 digit ISO code eg US / GB / AU
    },
    default_currency: "GBP",
    created: "2018-12-31T23:59:59Z",
    updated: "2018-12-31T23:59:59Z"
  }]
}

Where:

* We care about address for pre-filling the address in an AVS check, so where multiple addresses available use the best one for this purpose, probably postal vs physical
* Address we use country + line1-6
"account": {
	"id": "acc_5139_10163",
	"name": "John Smith",
	"code": "CRM-ANON-10163",
	"crm": "bo_5139_10004",
	"crm_key": "ANON-10163",
	"status": "TEMP",
	"disconnected_account": true,
	"created": "2019-10-01T16:25:00.000Z",
	"first_name": "John",
	"last_name": "Smith",
	"phone": "+447985112233",
	"full_address": "10 Linden Gardens, LONDON, W2 4ES",
	"address": {
	  "line1": "10 Linden Gardens",
	  "line4": "LONDON",
	  "line5": "W2 4ES",
	  "country": "GB"
	},
	"divisions": [
	  "div_5139_1"
	],
	"channels": [
	  "ch_5139_10000"
	],
	"initiatives": [
	  "in_5139_10000"
	],
	"bolton_values": {
	  "bo_5139_10004": {
	    "country": "global:country",
	    "firstname": "global:firstName",
	    "phone": "global:phone",
	    "timeZone": "Europe/London",
	    "lastname": "global:lastName"
	  },
	  "global": {
	    "country": "GB",
	    "country.line1": "10 Linden Gardens",
	    "country.line2": "",
	    "country.line3": "",
	    "country.line4": "LONDON",
	    "country.line5": "W2 4ES",
	    "firstName": "John",
	    "lastName": "Smith",
	    "phone": "+447985112233"
	  }
	},
	"tags": "ABC123,XYZ789",
	"last_transacted": "2019-10-01T16:25:02.000Z",
	"last_transaction": "tr_5139_10150"
}


GET get_invoices_url

Returns a list of all invoices that have been APPROVED (or equivalent status in the accounting package) - ie no draft invoices.

. This API supports paging through multiple pages of data (note, you will need to emulate limit&offset capability if the accounting package supports a different mechanism eg page_number).

Query Parameters:

  limit=
  offset=
  contact_id= // if passed you only need to filter the contact_id PK
  invoice_id_or_ref= // filter for an exact match on the invoice_id (eg GUID) or referece (eg reference INV001) if one exists
  status=
    UNPAID: Balance > 0 (any due date)
    OVERDUE: Balance > 0 && due < now
    PAID: Balance <= 0
    ALL: No filter - same as omitting the filter
  updated_after=
  order= // created (default) / updated


As we might need to page through several pages of data, order by a key like created date (asc) so any amends dont mess up our paging.

{
  limit: 20,
  offset: 0,
  total: 99, // where available, else omit
  invoices: [{
    invoice_id: "",
    contact_id:  "",
    reference: "",
    due: "2018-12-31T23:59:59Z",
    currency: ""
    total: ""
    balance: "",
    pdf_url: "" // relative (see: get_invoices_pdf_url below) where the platform can return a PDF invoice
    created: "2018-12-31T23:59:59Z",
    updated: "2018-12-31T23:59:59Z"
  }]
}

GET pdf_url

Download and return the invoice as a PDF - return it so if we typed this URL in our browser the actuall PDF will be displayed - ie encoded correctly. You'll need to include any data you need eg platform / platformid / invoice id encoded in the URL. Also make sure the URL is not guessable, so if invoice id is easy to guess eg 1,2,3 include a checksum in the url. If invoice_id is a GUID then that's secure enough.

POST post_payment_url

{
  platform: "QUICKBOOKS",
  platform_id: "123",
  connection_values: {},

  invoice_id: "",

  currency: "GBP",
  amount: "10",
  fee: "0.67"
  reference: "BOLT-D001002-00002008",
  paid: "2018-12-31T23:59:59Z",

  record_payment: true,
  payment_account: "101",
  payment_memo: "Payment made by Bolt.\nWhen:...",

  record_fee: true,
  fee_account: "199",
  fee_memo: "Processing fee for invoice INV-123"
}

Return:

{
  // No need to return anything other than the HTTP status
}


Logic:
* If record_payment==true && amount > 0, then create a payment against the invoice in the account passed. If the platform supports recording a memo / note on the payment, append the memo text.
* If record_fee==true and fee > 0, then create an expense / purchase that moves the money from the "payment_account" to the fee_account. If the platform supports recording a memo / note on the payment, append the memo text.