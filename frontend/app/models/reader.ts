export class Reader{
    ID!: number;
    Surname!: string;
    Name!: string;
    PatronymicName!: string;
    Address!: string;
    Phone!: number;
    DateBirth!: Date;

    constructor(id: number, surname: string, name: string, patronymicName: string, address: string, phone: number, dateBirth: Date){
        this.ID = id;
        this.Surname = surname;
        this.Name = name;
        this.PatronymicName = patronymicName;
        this.Address = address;
        this.Phone = phone;
        this.DateBirth = dateBirth;

    }
}