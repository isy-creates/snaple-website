<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <?php  wp_head(); ?>
  <title><?php is_front_page() ? bloginfo('description') : wp_title(); ?> | <?php echo get_bloginfo('name') ?></title>
</head>


<body <?php body_class(); ?>>

  <header class="header">
    <?php if ( function_exists( 'the_custom_logo' ) ) { the_custom_logo(); } ?>

  </header>