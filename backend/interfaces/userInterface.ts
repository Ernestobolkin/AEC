export interface IUserCreation {
    userName?: string;
    password?: string;
    email?: string;
    signature?: string;
    Cards?: string[];
}

export interface IUser {
    UserName: string;
    Password: string;
    Email: string;
    Signature: string;
    Cards: string[];
    CreationDate: string;
    Credentials: {
        salt: string;
    };
}

export interface ITransaction {
    CardId?: string;
    Description: string;
    Amount: number;
    Date?: string;
}

export interface ICard {
    CardIdentifierNumber: string;
    CardName: string;
}
export interface ErrorCode {
    code: string;
    message: string;
}
