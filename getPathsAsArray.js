const corePath = () => {
    let $base = window.location.pathname;
    
    //replace backslashes
    $base = $base.replace('\\','/');


    //prevent multiple slashes error
    $base = $base.replace('//','/');
    $base = $base.replace('//','/');
    

    //remove first slash of routepath
    if ($base[0] === '/') {
        $base = $base.substring(1);
    }

    //remove last slash of routepath
    if ($base[$base.length - 1] === '/') {
        $base = $base.substring(0, $base.length - 1);
    }

    return  $base.split('/');
}


module.exports = corePath;