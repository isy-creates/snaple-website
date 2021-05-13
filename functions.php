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

//remove Startseite
function getPageBySlugname($slugname) {
  $args = array(
      'post_type'     => 'page',
      'hierarchical'  => 0,
      'post_status'   => 'publish'
  );
  $pages = get_pages($args);
  foreach ($pages as $page) {
      if ($page->post_name == $slugname) {
          return $page->ID;
      }
  }       
}

//add featured Image
function mytheme_post_thumbnails() {
  add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'mytheme_post_thumbnails' );

//remove unwanted p tags from acf wysiwyg editor
// function acf_wysiwyg_remove_wpautop() {
//   remove_filter('acf_the_content', 'wpautop' );
// }
// add_action('acf/init', 'acf_wysiwyg_remove_wpautop');

function acf_wysiwyg_remove_wpautop() {
  // remove p tags //
  remove_filter('acf_the_content', 'wpautop' );
  // add line breaks before all newlines //
  add_filter( 'acf_the_content', 'nl2br' );
}

add_action('acf/init', 'acf_wysiwyg_remove_wpautop');

//remove gutenberg editor completly
// add_action('init', 'my_remove_editor_from_post_type');
// function my_remove_editor_from_post_type() {
//     remove_post_type_support( 'post', 'editor' );
// }