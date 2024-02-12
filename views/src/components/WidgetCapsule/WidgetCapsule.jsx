import "./WidgetCapsule.css"

export function WidgetCapsule({children, position, style}){

    const customStyles = {...style, gridArea: position}

    return(
        <div style={customStyles} className="widget">
            {children}
        </div>
    )
}