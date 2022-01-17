
import React, {useState, useEffect} from 'react'
import './child.scss'
const Child = ({ icon, skill, percentage }) => {
    const [style, setStyle] = useState()

    useEffect(() => {
        setTimeout(() => {
          const newStyle = {
            opacity: 1,
            width: `${percentage}`,
          };
          console.log(newStyle);
          setStyle(newStyle);
        }, 1000);
        
    }, [percentage])
    
    
    return (
        <div className="child">
            <div className="content">
                <div className="left">
                    {icon}
                </div>
                <div className="right">
                    <h1>{skill}</h1>
                    <div className="skill-bar">
                        <div className="progress" style={style}>
                            <span>{percentage}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Child
