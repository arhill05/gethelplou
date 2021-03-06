/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
interface Organization {
  OrganizationName: string;
  Address: string;
  City: string;
  State: string;
  ZipCode: number;
  County: string;
  lat: number;
  lng: number;
  PhoneNumber: string;
  ResidentialOffered: boolean;
  OutpatientOffered: boolean;
  OutpatientIntensive: boolean;
  OutpatientServices: boolean;
  ForChildren: boolean;
  ForAdults: boolean;
  ForMales: boolean;
  ForFemales: boolean;
  PregnancyServices: boolean;
  InsuranceMedicare: boolean;
  InsuranceMedicaid: boolean;
  InsuranceGovtFunded: boolean;
  InsurancePrivate: boolean;
  InsurancePaymentAssistance: boolean;
  InsuranceNoFee: boolean;
  WebUrl: string;
  MedicalDetoxOffered: boolean;
  AssessmentOffered: boolean;
  AdditionalNotes: string;
  MondayHours: string;
  TuesdayHours: string;
  WednesdayHours: string;
  ThursdayHours: string;
  FridayHours: string;
  SaturdayHours: string;
  SundayHours: string;
}

