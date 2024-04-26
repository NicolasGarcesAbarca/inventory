import { env } from "../../../env.mjs";

interface IProps {
  email: string | undefined;
  password: string | undefined;
}

export function isAdmin({ email, password }: IProps) {
  return env.ADMIN_EMAIL === email && env.ADMIN_PASS === password;
}
