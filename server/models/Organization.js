class Organization {
  constructor(dataRowElement) {
    this.organizationName = dataRowElement.organizationname;
    this.address = dataRowElement.address;
    this.city = dataRowElement.city;
    this.state = dataRowElement.state;
    this.zipCode = dataRowElement.zipcode;
    this.county = dataRowElement.county;
    this.lat = dataRowElement.lat;
    this.lng = dataRowElement.lng;
    this.phoneNumber = dataRowElement.phonenumber;
    this.residentialOffered = dataRowElement.residentialoffered;
    this.outpatientOffered = dataRowElement.outpatientoffered;
    this.outpatientIntensive = dataRowElement.outpatientintensive;
    this.outpatientServices = dataRowElement.outpatientservices;
    this.forChildren = dataRowElement.forchildren;
    this.forAdults = dataRowElement.foradults;
    this.forMales = dataRowElement.formales;
    this.forFemales = dataRowElement.forfemales;
    this.pregnancyServices = dataRowElement.pregnancyservices;
    this.insuranceMedicare = dataRowElement.insurancemedicare;
    this.insuranceMedicaid = dataRowElement.insurancemedicaid;
    this.insuranceGovtFunded = dataRowElement.insurancegovtfunded;
    this.insurancePrivate = dataRowElement.insuranceprivate;
    this.insurancePaymentAssistance = dataRowElement.insurancepaymentassistance;
    this.insuranceNoFee = dataRowElement.insurancenofee;
    this.webUrl = dataRowElement.weburl;
    this.medicalDetoxOffered = dataRowElement.medicaldetoxoffered;
    this.assessmentOffered = dataRowElement.assessmentoffered;
    this.additionalNotes = dataRowElement.additionalnotes
  }
}

module.exports = Organization;