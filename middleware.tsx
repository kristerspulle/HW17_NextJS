export { default } from "next-auth/middleware"

export const config = { matcher: ["/protected", "/protected/comments", "/protected/newblog", "/protected/editblog"]}