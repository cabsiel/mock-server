export interface ExampleEntityLayout {
  headerColor: string;
  footerColor: string;
  logoPath: string;
}

export interface Brand {
  name: string;
  brandCode: string;
  srcImage: string;
}

export interface Comment {
  user: string;
  dateTime: string;
  text: string;
}

export interface Status {
  status: string;
  dateTime: Date;
}

export interface ExhibitorRel {
  id: number;
  name: string;
  code: string;
}
