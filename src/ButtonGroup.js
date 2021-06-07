import { useState } from 'react';
import SimpleButton from './SimpleButton';

function ButtonGroup(props) {
    const [selected, setSelected] = useState(undefined);

    const chooseButton = (index) => setSelected(index);

    return (
        <>
        {props.names.map(
            (nam, index) => <SimpleButton name={nam} key={index} index={index}
            selected={index === selected} choose={chooseButton}>
            </SimpleButton>)}
        </>
    );
};

export default ButtonGroup;