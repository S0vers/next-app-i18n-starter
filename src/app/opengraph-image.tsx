import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Next.js i18n Template - Multilingual Starter';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '80px',
            zIndex: 1,
          }}
        >
          {/* Logo/Icon */}
          <div
            style={{
              width: '120px',
              height: '120px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <div
              style={{
                fontSize: '60px',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              ⚡
            </div>
          </div>
          
          {/* Title */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              marginBottom: '24px',
              lineHeight: 1.1,
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            Next.js i18n Template
          </h1>
          
          {/* Subtitle */}
          <p
            style={{
              fontSize: '32px',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: 0,
              marginBottom: '40px',
              fontWeight: 400,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            Multilingual Starter with TypeScript & Tailwind
          </p>
          
          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {['🌍 5 Languages', '🎨 shadcn/ui', '📱 RTL Support'].map((feature) => (
              <div
                key={feature}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '12px 24px',
                  borderRadius: '16px',
                  fontSize: '24px',
                  color: 'white',
                  fontWeight: 500,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '20px',
            fontWeight: 500,
          }}
        >
          <div>next-app-i18n-starter.vercel.app</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}