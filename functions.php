<?php

//Style Registrierung
function _themename_assets() {
  wp_enqueue_style( '_themename-stylesheet', get_template_directory_uri() . '/dist/css/style.css', array(), '1.0.0', 'all' );
  wp_enqueue_script( '_themename-scripts', get_template_directory_uri() . '/dist/js/bundle.js', array(), '1.0.0', true );
}

add_action('wp_enqueue_scripts', '_themename_assets');

// enable logo upload

function snaple_custom_logo_setup() {
  $defaults = array(
      'height'               => 48,
      'width'                => 141,
      'flex-height'          => true,
      'flex-width'           => true
  );

  add_theme_support( 'custom-logo', $defaults );
}

add_action( 'after_setup_theme', 'snaple_custom_logo_setup' );

//register menus
function snaple_menu() {
  register_nav_menus(
    array(
      'header-menu' => __( 'Header Menü' ),
      'extra-menu' => __( 'Footer Menü' )
    )
  );
}
add_action( 'init', 'snaple_menu' );