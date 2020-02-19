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

    console.log('hello from voter');
    console.log('user', user);
    // here the subject of this voter is the post
    // if(!subject || !subject.authorId || !user || !user.userId){
    //   return false;
    // }
    // return subject.authorId === user.userId;
    return true;
  };

  return {
    supports,
    voteOnAttribute,
  };
};

export default postOwnerVoter;
