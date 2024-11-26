import type { Route } from "./+types/home";
import { css } from "panda/css";

export function meta({}: Route.MetaArgs) {
  return [{ title: "윤슬" }];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div
      className={css({
        fontSize: "2xl",
        fontWeight: "bold",
      })}
    >
      {loaderData.message}
    </div>
  );
}
