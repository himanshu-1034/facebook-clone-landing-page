import './Widgets.css';
import React from 'react'

export default function Widgets() {
    return (
        <div className="widgets">
            <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fapple%2F%3Fref%3Dpage_internal&tabs=timeline&width=320&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            width="320"
            height="100%"
            style={{border:"none",overflow:"hidden"}}
            scrolling="yes"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>
        </div>
    )
}
