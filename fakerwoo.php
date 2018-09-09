<?php
/**
 * Plugin Name: FakerWoo
 */

namespace FakerWoo;

if (!defined('ABSPATH')) {
    exit;
}

/*
 * Initialize all the plugin things.
 *
 * @throws \Throwable
 */
function initialize()
{

    try {
        if (is_readable(__DIR__ . '/vendor/autoload.php')) {
            /** @noinspection PhpIncludeInspection */
            require_once __DIR__ . '/vendor/autoload.php';
        }

        (new FakerWoo)->init();

    } catch (\Throwable $e) {
        if (defined('WP_DEBUG') && WP_DEBUG) {
            throw $e;
        }
        do_action('fakerwoo.error', $e);
    }
}

add_action('plugins_loaded', __NAMESPACE__ . '\\initialize');
