import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl;
    const host = request.headers.get('host') || '';

    // Check if we are on vigidevis.be, www.vigidevis.be, or vigi-agency.be without www
    const isVigiDevis = host === 'vigidevis.be' || host === 'www.vigidevis.be';
    const isNakedVigiAgency = host === 'vigi-agency.be';

    if (isVigiDevis || isNakedVigiAgency) {
        // We want to force https://www.vigi-agency.be
        const newUrl = new URL(url.pathname + url.search, 'https://www.vigi-agency.be');
        return NextResponse.redirect(newUrl, 301);
    }

    return NextResponse.next();
}

export const config = {
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico, sitemap.xml, robots.txt (metadata files)
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|apple-touch-icon.png|favicon-512.png|site.webmanifest).*)',
    ],
};
