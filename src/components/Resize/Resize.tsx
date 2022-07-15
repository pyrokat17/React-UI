import React, { MouseEventHandler, ReactElement, useState, useRef } from 'react'
import "./Resize.scss"

interface ResizeProps {
    children?: ReactElement[] | ReactElement | undefined;
    minWidth?: number | undefined;
    startingWidth: number | undefined;
    maxWidth?: number | undefined;
    minHeight?: number | undefined;
    startingHeight: number| undefined;
    maxHeight?: number | undefined;
    color?: string | undefined;

}


export default function Resize({children, minWidth, startingWidth, maxWidth, minHeight, startingHeight, maxHeight, color}: ResizeProps) {
    const container = useRef<HTMLDivElement | null>(null)
    // state management
    const [width, setWidth] = useState<number | undefined>(startingWidth)
    const [height, setHeight] = useState<number | undefined>(startingHeight)
    const [rightBarMouseDown, setRightBarMouseDown] =  useState<boolean>(false)
    const [bottomBarMouseDown, setBottomBarMouseDown] =  useState<boolean>(false)

    const handleMouseEvent = (event: React.MouseEvent):  void => {
        if (!container || event.buttons !== 1) return
        if (rightBarMouseDown){
            setWidth(event.pageX)}
        if (bottomBarMouseDown) {
            setHeight(event.pageY)
        }
       
    // console.log(event.screenX, event.pageX, event.clientX, " - ", container?.current?.offsetWidth)
    }
    const handleMouseDown = (e: React.MouseEvent, actionType: string): void => {
        if (typeof document == "undefined") return
        const doc: HTMLBodyElement | null = document.querySelector("body")
        doc?.setAttribute("style","cursor:grabbing;")
        console.log(doc)
        if (actionType === "RIGHT_BAR") {
setRightBarMouseDown(true)
        }
        if (actionType === "BOTTOM_BAR") {
setBottomBarMouseDown(true)
        }
        if (actionType === "BOTH_BAR") {
            setRightBarMouseDown(true)
            setBottomBarMouseDown(true)

        }
    }
    const handleMouseUp = () => {
        const doc: HTMLBodyElement | null = document.querySelector("body")
        doc?.setAttribute("style","cursor: ;")
        setBottomBarMouseDown(false);setRightBarMouseDown(false)
    }
    // console.log(container)
    console.log(`right: ${rightBarMouseDown} - bottom: ${bottomBarMouseDown}`)
    return (<div ref={container} 
    onMouseUp={handleMouseUp}
    onMouseLeave={handleMouseUp}

       onMouseMove={handleMouseEvent}
        style={{width: width, height: height}}  className="container">
        <div className="content">
            {children}
        </div>
        <div 
       
        onMouseDown={(e) => handleMouseDown(e, "RIGHT_BAR")}
        style={{width: "3px", height: "98%", backgroundColor: color || "grey" }} className="ui-bar box right"></div>
        <div 
        onMouseDown={(e) => handleMouseDown(e, "BOTTOM_BAR")}
        
        style={{width: "98%", height: "3px", backgroundColor: color || "grey" }} className='ui-bar box bottom'></div>
        <div onMouseDown={(e) => handleMouseDown(e, "BOTH_BAR")} style={{width: "2%", height: "2%", borderRight: `5px solid ${color || "grey"}`,borderBottom: `5px solid ${color || "grey"}`,borderTopLeftRadius: "2px", borderBottomRightRadius: "5px"}} className='ui-bar box bottom right' ></div>
    </div>
    
    
  )
}
