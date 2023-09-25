/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/


module.exports = {

  "protoVer": "v6", // Update the prototype version here. This will also change the urls e.g. /epr/v1/home

  // Stages of the journey
  "intro1": "no",
  "declared": "no",
  "applied": "no",
  "paid": "no",
  "submitted": "no",
  "registered": "no",
  "packagingIntro": "no",
  "packagingPrimaryIntro": "no",
  "packagingSecondaryIntro": "no",
  "packagingTransitIntro": "no",
  "chooseActivities": "no",
  "nationIntro": "no",
  "chooseNation": "no",
  "introObligations": "no",
  "reportMethod": "no",
  "nextSteps": "no",
  "checkReporting": "no",
  "dataReported": "no",
  "dataReviewed": "no",
  "dataAccepted": "no",

  // Company information
  "sub1": "null",
  "sub2": "null",
  "orgNation": "England",
  "orgOnlineMarketplace": "no", // toggle between 'no' or 'yes'
  "orgTurnover": "5,500,000",
  "govGateEmail": "johnsmith@acmeorg.co.uk",
  "defraIdCompaniesHouseNumber": "01234567",
  "defraIdCompanyPhone": "01234 567899",
  "defraIdCompanyEmail": "info@acmeorg.co.uk",
  "defraIdFirstName": "John",
  "defraIdSurname": "Smith",
  "defraIdPersonalPhone": "07711223344",
  "defraIdSecurityWord": "pancakes",
  "defraIdSecurityHint": "My favourite food",
  "correspondenceAddress1": "Unit 24",
  "correspondenceAddress2": "Industrial Estate",
  "correspondenceAddress3": "",
  "correspondenceAddress4": "",
  "correspondenceAddressTown": "Sheffield",
  "correspondenceAddressCounty": "",
  "correspondenceAddressPostcode": "S12 3RP",
  "correspondencePhone": "0114 5567 890",
  "correspondenceEmail": "sheffield@acmeorg.co.uk",
  "sub1CompanyName": "Subsidiary One Ltd",
  "sub1CompanyPhone": "0113 0948 333",
  "sub1CompanyEmail": "enquiries@subsidiary.com",
  "sub2CompanyName": "Subsidiary Two Ltd",
  "sub2CompanyPhone": "01423 555 787",
  "sub2CompanyEmail": "hello@subsidiarytwo.com",

  // EPR packaging category data
  "packagingPrimary": "yes",
  "packagingSecondary": "yes",
  "packagingTransit": "yes",
  "activityPrimary01a": "yes",
  "activityPrimary01b": "yes",
  "activityPrimary02": "yes",
  "activityPrimary03": "yes",
  "activityPrimary04": "yes",
  "activityPrimary05": "yes",
  "activitySecondary01a": "yes",
  "activitySecondary01b": "yes",
  "activitySecondary02": "yes",
  "activitySecondary03": "yes",
  "activitySecondary04": "yes",
  "activitySecondary05": "yes",
  "activityTransit01": "yes",
  "activityTransit02": "yes",
  "activityTransit03": "yes",
  "activityTransit04": "yes",
  "activityTransit05": "yes",
  "materialsPrimary": "plastic,steel",
  "materialsSecondary": "paper",
  "materialsTransit": "wood",

  // EPR nation data
  "nationData": "yes", // toggle between 'no' or 'yes' (replaced activityNation01)
  "activityNation01": "yes",
  "activityNation02": "yes",
  "activityNation03": "yes",
  "activityNation04": "yes",
  "activityNation05": "yes",
  "materialsNation": "plastic,paper,steel,wood",

  // DRS-specific data below
  "orgDescription": "producer,retailer",
  "isCompany": "yes",
  "reported1": "no",
  "reported2": "no",
  "reported3": "no",
  "reported4": "no",
  "reportProducer": "null",
  "reportRetailer": "null",
  "existingEpr": "no",
  "thresholdMet": "no",
  "drsOrgTypeV2": "no",  
  "drsNationV2": "no",
  "obProducerBrand": "yes",
  "obProducerImporter": "yes",
  "obProducerTurnover": "yes",
  "obRetailer": "yes",
  "obCombinedTurnover": "yes",
  "obCombinedDrs": "yes",
  "obCombinedEprExport": "yes",
  "obCombinedEprTonnage": "over",
  "obDrsCheckboxes": "no",

  // Paper-cups
  "cups-registration-main-address": "9 Grange Road\nCambridge\nEngland\nCB2 0AA"
}
