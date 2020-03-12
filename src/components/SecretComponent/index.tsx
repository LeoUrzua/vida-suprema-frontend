import React from 'react'
import useIsGranted from '../../utils/access-decision-manager-react/src/is-granted-hook';

interface SecretProps {
    attribute: string
    setAttribute: any
}

const SecretComponent: React.FC<SecretProps> =  ({attribute, setAttribute}) => {
    const canEdit =  useIsGranted(attribute);

    return(
        <div>

            <h1>Attribute: </h1><h2>{attribute}</h2>

            <button onClick={() => setAttribute('EDIT_POST')}>
                Attribute: EDIT_POST
            </button>

            <button onClick={() => setAttribute('INVALID')}>
                Attribute: INVALID
            </button>

            <h1>CanEdit:</h1>
            <h1>{JSON.stringify(canEdit)}</h1>
            {
                canEdit.isGranted &&
                    <h1>Content</h1>
            }
        </div>
    )
}

export default SecretComponent;
