export default function boolValid(arg) {
  return arg !== undefined || arg instanceof Boolean ? arg : true
}
