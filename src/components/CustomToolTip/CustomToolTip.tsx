import { SafeAreaView } from "react-native"
import { styles } from "./customToolTip.style"
import Tooltip from "react-native-walkthrough-tooltip"
import { CustomToolTipType } from "../../types"
  
const CustomToolTip = ({content, placement, children, isVisible, onClose}: CustomToolTipType) => {

    return(
    <SafeAreaView>
        <Tooltip
        isVisible={isVisible}
        content={content}
        placement = {placement}
        onClose={onClose}
        contentStyle = {styles.toolTipContentStyle}
        tooltipStyle = {styles.toolTipStyle}  
        backgroundColor="transparent"
        arrowSize={{width:0, height:0}}
      >
        {children}
      </Tooltip>

    </SafeAreaView>
)
}
export default CustomToolTip