import { headers as getHeaders } from 'next/headers'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className="wn-admin">

      {/* Moving Neon Background */}
      <div className="wn-bg"></div>
      <div className="wn-bg-overlay"></div>

      {/* Logo */}
      <div className="wn-logo glass">
        <Image
          alt="WaveNation Logo"
          src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
          width={75}
          height={75}
        />
        <h1>WaveNation CMS</h1>
      </div>

      {/* Welcome */}
      <div className="wn-welcome glass">
        {!user && <h2>Welcome to your WaveNation Admin.</h2>}
        {user && (
          <h2>
            Welcome back, <span className="highlight">{user.email}</span>
          </h2>
        )}
        <p>Manage your content, media, schedules, and platform settings.</p>
      </div>

      {/* Buttons */}
      <div className="wn-links">
        <a
          className="wn-btn primary"
          href={payloadConfig.routes.admin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Admin Panel
        </a>

        <a
          className="wn-btn outline"
          href="https://payloadcms.com/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </div>
    </div>
  )
}
