export function log(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  console.log("target:", target);
  console.log("propertyKey:", propertyKey);
  console.log("descriptor:", descriptor);

  // save a reference to the original method
  let originalMethod: any = descriptor.value;

  descriptor.value = function(...args: any[]): any {
    // pre

    console.log("function started");

    // run and store the result
    let result: any = originalMethod.apply(this, args);

    // post
    console.log("The return value is: " + result);

    // return the result of the original method
    return result;
  };

  return descriptor;
}
