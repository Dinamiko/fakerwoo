<?php

namespace Dinamiko\FakerWoo\Api;

class Orders extends \WP_REST_Controller
{

    /**
     * @var string
     */
    protected $namespace = 'fakerwoo/v1';

    /**
     * @var string
     */
    protected $rest_base = 'orders';

    /**
     * @var string
     */
    protected $post_type = 'shop_order';

    /**
     * Register routes.
     *
     * @return void
     */
    public function register_routes()
    {

        register_rest_route($this->namespace, '/' . $this->rest_base, [
            [
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [$this, 'getItems'],
                'permission_callback' => [$this, 'update_item_permissions_check'],
            ],
        ]);

        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/(?P<id>[\d]+)',
            [
                'args' => [
                    'id' => [
                        'description' => __('Order ID.', 'fakerwoo'),
                        'type' => 'integer',
                    ],
                ],
                [
                    'methods' => \WP_REST_Server::EDITABLE,
                    'callback' => [
                        $this,
                        'update_item',
                    ],
                    'permission_callback' => [
                        $this,
                        'update_item_permissions_check',
                    ],
                    'args' => $this->get_endpoint_args_for_item_schema(\WP_REST_Server::EDITABLE),
                ],
                'schema' => [
                    $this,
                    'get_public_item_schema',
                ],
            ]
        );
    }

    /**
     * Get all order IDs.
     * @return \WP_REST_Response
     */
    public function getItems()
    {
        global $wpdb;
        $select = "select ID from {$wpdb->posts} where post_type = '{$this->post_type}'";
        $query = $wpdb->get_results($select);

        return new \WP_REST_Response($query, 200);
    }

    /**
     * Update a single order.
     * @param \WP_REST_Request $request
     * @return \WP_Error|\WP_REST_Response
     */
    public function update_item($request)
    {
        $post_id = (int)$request['id'];

        if (empty($post_id) || get_post_type($post_id) !== $this->post_type) {
            return new \WP_Error(
                "woocommerce_rest_{$this->post_type}_invalid_id",
                __('ID is invalid.', 'fakerwoo'),
                ['status' => 400]
            );
        }

        global $wpdb;
        $update = $wpdb->update(
            $wpdb->prefix . 'posts',
            [
                'post_date' => $request['date_created'],
                'post_date_gmt' => $request['date_created']
            ],
            ['ID' => $post_id],
            [
                '%s',
                '%s'
            ],
            ['%d']
        );

        if ($update) {
            return new \WP_REST_Response(true, 200);
        }

        return new \WP_REST_Response(false, 200);
    }

    /**
     * Check if a given request has access.
     * @param \WP_REST_Request $request
     * @return bool|\WP_Error
     */
    public function update_item_permissions_check($request)
    {
        return current_user_can('manage_options');
    }
}
