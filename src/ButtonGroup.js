import { useState } from 'react';
import SimpleButton from './SimpleButton';
import { Col } from 'react-bootstrap';

function ButtonGroup(props) {
    const [selected, setSelected] = useState(undefined);

    const chooseButton = (index) => setSelected(index);

    return (
        <>
        {props.names.map(
            (nam, index) => <Col md='auto' key={index}><SimpleButton name={nam} index={index}
            selected={index === selected} choose={chooseButton}>
            </SimpleButton></Col>)}
        </>
    );
};

export default ButtonGroup;