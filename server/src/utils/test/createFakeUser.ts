import FormattedProps from "#types/user/FormattedProps";
import User from "#models/User";
import generateFakeUserProps from "#utils/test/generateFakeUserProps";

async function createFakeUser (
    options: FormattedProps = {}
): Promise<User> {
    const userProps = await generateFakeUserProps(options);
    return User.create(userProps);
}

export default createFakeUser;