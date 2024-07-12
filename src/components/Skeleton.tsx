import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className='wrapper-staff'
        speed={2}
        width={305}
        height={293}
        viewBox="0 0 305 293"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="566" y="333" rx="3" ry="3" width="88" height="6" />
        <rect x="554" y="329" rx="3" ry="3" width="52" height="6" />
        <rect x="458" y="333" rx="3" ry="3" width="410" height="6" />
        <rect x="516" y="330" rx="3" ry="3" width="380" height="6" />
        <rect x="450" y="339" rx="3" ry="3" width="178" height="6" />
        <rect x="69" y="214" rx="5" ry="5" width="159" height="25" />
        <rect x="244" y="252" rx="7" ry="7" width="29" height="27" />
        <circle cx="583" cy="339" r="19" />
        <circle cx="580" cy="364" r="16" />
        <circle cx="145" cy="119" r="79" />
        <circle cx="579" cy="369" r="12" />
    </ContentLoader>
)

export default Skeleton
