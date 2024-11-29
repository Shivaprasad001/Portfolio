import PropTypes from 'prop-types';
export default function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return(
        <div 
            className="tab-panel"
            hidden={value !== index}
            id={`tab-panel-${index}`}
            {...other}
        >
            {value === index && <div className="tab-panel-content">{children}</div>}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
}