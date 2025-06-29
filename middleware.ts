import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const tier1Countries = ['US', 'CA', 'GB', 'DE', 'FR', 'AU', 'SG', 'NL', 'SE', 'NO']

  const country = request.headers.get('x-vercel-ip-country') || 'US' // Default fallback

  if (tier1Countries.includes(country)) {
    // You can set a cookie or rewrite to a special version
    request.headers.set('x-tier', 'tier1')
  } else {
    request.headers.set('x-tier', 'other')
  }

  return NextResponse.next({
    request: {
      headers: request.headers,
    },
  })
}
