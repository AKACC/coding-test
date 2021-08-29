import './styles.css';

// sizes
const SIZE = {
    'large':'70px',
    'medium': '30px',
    'small':'10px'
}
/**
 * Custom Loading Indicator
 * @param { 
 *  isLoading:boolean
 *  size: string
 *  containerStyle: style
 * }
 * @returns 
 */
export default function LoadingIndicator({
    isLoading = true,
    size='medium',
    containerStyle=null,
}){
    if(isLoading) 
        return(
            <div className="loading-indicator-container" style={containerStyle}>
                <div className="loading-icon" 
                    style={{
                        width:SIZE[size],
                        height:SIZE[size],
                    }}
                ></div>
            </div>
        )
    else return null;
}