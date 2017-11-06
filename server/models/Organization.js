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
    this.phoneNumber = formatPhoneNumber(dataRowElement.phonenumber);
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
    this.additionalNotes = dataRowElement.additionalnotes;
    this.mondayHours = dataRowElement.mondayhours;
    this.tuesdayHours = dataRowElement.tuesdayhours;
    this.wednesdayHours = dataRowElement.wednesdayhours;
    this.thursdayHours = dataRowElement.thursdayhours;
    this.fridayHours = dataRowElement.fridayhours;
    this.saturdayHours = dataRowElement.saturdayhours;
    this.sundayHours = dataRowElement.sundayhours;
  }
}

formatPhoneNumber = (phoneNumber) => {
    var s2 = (""+phoneNumber).replace(/\D/g, '');
    var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
}

module.exports = Organization;