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
    this.residentialOffered = (dataRowElement.residentialoffered == '1');
    this.outpatientOffered = (dataRowElement.outpatientoffered == '1');
    this.outpatientIntensive = (dataRowElement.outpatientintensive == '1');
    this.outpatientServices = (dataRowElement.outpatientservices == '1');
    this.forChildren = (dataRowElement.forchildren == '1');
    this.forAdults = (dataRowElement.foradults == '1');
    this.forMales = (dataRowElement.formales == '1');
    this.forFemales = (dataRowElement.forfemales == '1');
    this.pregnancyServices = (dataRowElement.pregnancyservices == '1');
    this.insuranceMedicare = (dataRowElement.insurancemedicare == '1');
    this.insuranceMedicaid = (dataRowElement.insurancemedicaid == '1');
    this.insuranceGovtFunded = (dataRowElement.insurancegovtfunded == '1');
    this.insurancePrivate = (dataRowElement.insuranceprivate == '1');
    this.insurancePaymentAssistance = (dataRowElement.insurancepaymentassistance == '1');
    this.insuranceNoFee = (dataRowElement.insurancenofee == '1');
    this.webUrl = dataRowElement.weburl;
    this.medicalDetoxOffered = (dataRowElement.medicaldetoxoffered == '1');
    this.assessmentOffered = (dataRowElement.assessmentoffered == '1');
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