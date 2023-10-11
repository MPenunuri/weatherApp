import showVariables from './showVariables.js';
import showConditionIcons from './showConditionIcons.js';

export default function (obj) {
  showVariables(obj);
  const conditionContainerId = 'condition' + obj.date.toString();
  showConditionIcons(obj.day.condition.icon, conditionContainerId);
}
