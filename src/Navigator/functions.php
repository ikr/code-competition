<?php

namespace Navigator;

function pageNumbersText($offset, $total, $rowsPerPage, $maxNavigatorSize)
{
    saveGlobalVarsForV8Js($offset, $total, $rowsPerPage, $maxNavigatorSize);
    $v8 = new \V8Js('PHP', array_combine(argumentNames(), argumentNames()));

    return $v8->executeString(implementationJs());
}

function saveGlobalVarsForV8Js($_offset, $_total, $_rowsPerPage, $_maxNavigatorSize)
{
    global $offset, $total, $rowsPerPage, $maxNavigatorSize;

    foreach (argumentNames() as $name) {
        $$name = ${'_' . $name};
    }
}

function argumentNames()
{
    return array('offset', 'total', 'rowsPerPage', 'maxNavigatorSize');
}

function implementationJs()
{
    return <<<EOF
var module = {};
EOF
        . file_get_contents(__DIR__ . '/implementation.js')
        . <<<EOF
module.exports(PHP.offset, PHP.total, PHP.rowsPerPage, PHP.maxNavigatorSize);
EOF;
}