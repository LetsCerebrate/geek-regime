import HashOptions from "#types/UserHashOptions";
import Profile from "#types/UserProfile";

interface Item {
    about: string;
    createdAt: Date;
    email: string;
    hasPassword: boolean;
    hashOptions?: HashOptions;
    id: number;
    isAdmin: boolean;
    isConfirmed: boolean;
    profile?: Profile;
    updatedAt: Date;
}

export default Item;
