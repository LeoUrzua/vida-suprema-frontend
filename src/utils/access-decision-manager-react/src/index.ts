import AccessDecisionManager, { Voter } from '@wizeline/access-decision-manager';
import AccessDecisionManagerProvider from './access-decision-manager-provider';
import useIsGranted from './is-granted-hook';


export default AccessDecisionManagerProvider;
// @ts-ignore
export { useIsGranted, AccessDecisionManager, Voter}
