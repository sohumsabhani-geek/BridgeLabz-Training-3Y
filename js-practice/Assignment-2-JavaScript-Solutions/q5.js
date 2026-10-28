// Q5: Boolean Logic Access System
function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // Use OR and NOT to identify any unsafe condition.
    const isUnsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;

    if (isSecure && !isUnsafe) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

checkSecurity(true, true, true, true);
checkSecurity(true, false, true, true);
checkSecurity(true, true, false, true);
