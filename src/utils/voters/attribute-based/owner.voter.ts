import {Voter} from '@wizeline/access-decision-manager';

const supportedAttributes = [
  'DELETE_POST',
   'EDIT_POST',
];

const postOwnerVoter = (
  _options: {}, // eslint-disable-line @typescript-eslint/no-unused-vars
): Voter => {
  const supports = (attribute: string): boolean => {
    return supportedAttributes.includes(attribute);
  };

  const voteOnAttribute = (_attribute: any, subject: any, user: any): boolean => {
    return true;
  };

  return {
    supports,
    voteOnAttribute,
  };
};

export default postOwnerVoter;
