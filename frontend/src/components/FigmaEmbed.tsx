import React from 'react';

interface FigmaEmbedProps {
    url: string;
    width?: string;
    height?: string;
}

export default function FigmaEmbed({ url, width = '100%', height = '600px' }: FigmaEmbedProps) {
    // Construct the embed URL from the design URL
    const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;

    return (
        <div style={{ width, height }}>
            <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
                allowFullScreen
                title="Figma Design"
            />
        </div>
    );
}