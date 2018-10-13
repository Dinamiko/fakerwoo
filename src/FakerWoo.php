<?php

namespace Dinamiko\FakerWoo;

use Dinamiko\FakerWoo\Api\Orders;

class FakerWoo
{

    /**
     * @var int
     */
    private $pageId;

    /**
     * Initializes the plugin.
     */
    public function init()
    {
        add_action('admin_menu', [$this, 'adminMenu']);
        add_action('admin_enqueue_scripts', [$this, 'enqueueScripts']);
        add_action('rest_api_init', [$this, 'register_rest_routes'], 10);
    }

    public function register_rest_routes()
    {
        (new Orders())->register_routes();
    }

    /**
     * Creates admin menu.
     * @wp-hook admin_menu
     */
    public function adminMenu()
    {

        $this->pageId = add_menu_page(
            'FakerWoo',
            'FakerWoo',
            'manage_options',
            'fakerwoo',
            [$this, 'renderMenu']
        );
    }

    /**
     * Renders admin menu.
     * @return void
     */
    public function renderMenu()
    { ?>
        <div class="wrap">
            <div id="app"></div>
        </div>
    <?php }

    /**
     * Enqueue plugin scripts.
     * @param $hook
     * @return void
     */
    public function enqueueScripts($hook)
    {

        global $wp_version;

        if ($this->pageId === $hook) {

            wp_enqueue_script(
                'FakerWoo',
                plugin_dir_url(__FILE__) . '../build/app.js',
                [],
                $wp_version,
                true
            );

            wp_localize_script('FakerWoo', 'FakerWooLocalizedData', array(
                'root' => esc_url_raw(rest_url()),
                'nonce' => wp_create_nonce('wp_rest'),
                'data' => esc_url_raw(plugins_url().'/fakerwoo/app/data')
            ));
        }
    }
}
