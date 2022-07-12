import bcrypt from "bcrypt";
import config from "config";
import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
	email: string;
	name: string;
	password: string;
	comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true, index: true },
	name: { type: String, required: true  },
	password: { type: String, required: true }
}, { timestamp: true });

UserSchema.pre("save", async (next: mongoose.HookNextFunction) => {
	const user = this as UserDocument;
	if(!user.isModified("password")) return next();
	const salt = config.get("SALT_WORK_FACTOR") as string;
	const hash = bcrypt.hashSync(user.password, salt);
	user.password = hash;
	return next()
})

UserSchema.methods.comparePassword = (candidatePassword: string) =>  {
	const user = this as UserDocument;
	return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
}

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
