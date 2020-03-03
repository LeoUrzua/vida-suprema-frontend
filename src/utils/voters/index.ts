import { Voter } from '@wizeline/access-decision-manager';
import postOwnerVoter from "./attribute-based/owner.voter";

type Options = Parameters<typeof postOwnerVoter>[0];

const voterFactory = (options: Options): Voter[] => {
  return [
    postOwnerVoter(options),
  ];
};

export default voterFactory;
