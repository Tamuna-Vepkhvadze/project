export interface UserData {
    name: string,
    lastName: string,
    img: string,
    phone: string,
    email: string
    password: string,
}

export interface ResponseUserData {
    _id: string,
    name: string,
    lastName: string,
    img: string,
    phone: string,
    email: string
}

export interface UserValid {
    email: string
    password: string,
}

export interface ConextType {
    auhtUser: ResponseUserData | null,
    loader: boolean,
    setAuthUser: (data: ResponseUserData | null) => void,
    logout: () => void
}

