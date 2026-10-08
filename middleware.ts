import { NextResponse, type NextRequest } from "next/server";
// Cheap gate: real verification happens in each API route via isAdmin(); the admin page also checks.
export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin") && req.nextUrl.pathname !== "/admin/login" && !req.cookies.get("session")) return NextResponse.redirect(new URL("/admin/login", req.url));
}
export const config = { matcher: ["/admin/:path*"] };
