export declare type SystemStatus = {
    environment: SystemStatusEnvironment;
    database: SystemStatusDatabase;
    active_plugins: string[];
    theme: SystemStatusTheme;
    settings: SystemStatusSettings;
    security: SystemStatusSecurity;
    pages: string[];
};

export declare type SystemStatusEnvironment = {
    home_url: string;
    site_url: string;
    wc_version: string;
    log_directory: string;
    log_directory_writable: boolean;
    wp_version: string;
    wp_multisite: boolean;
    wp_memory_limit: number;
    wp_debug_mode: boolean;
    wp_cron: boolean;
    language: string;
    server_info: string;
    php_version: string;
    php_post_max_size: number;
    php_max_execution_time: number;
    php_max_input_vars: number;
    curl_version: string;
    suhosin_installed: boolean;
    max_upload_size: number;
    mysql_version: string;
    default_timezone: string;
    fsockopen_or_curl_enabled: boolean;
    soapclient_enabled: boolean;
    domdocument_enabled: boolean;
    gzip_enabled: boolean;
    mbstring_enabled: boolean;
    remote_post_successful: boolean;
    remote_post_response: string;
    remote_get_successful: boolean;
    remote_get_response: string;
};

export declare type SystemStatusDatabase = {
    wc_database_version: string;
    database_prefix: string;
    maxmind_geoip_database: string;
    database_tables: string[];
};

export declare type SystemStatusTheme = {
    name: string;
    version: string;
    version_latest: string;
    author_url: string;
    is_child_theme: boolean;
    has_woocommerce_support: boolean;
    has_woocommerce_file: boolean;
    has_outdated_templates: boolean;
    overrides: string[];
    parent_name: string;
    parent_version: string;
    parent_author_url: string;
};

export declare type SystemStatusSettings = {
    api_enabled: boolean;
    force_ssl: boolean;
    currency: string;
    currency_symbol: string;
    currency_position: string;
    thousand_separator: string;
    decimal_separator: string;
    number_of_decimals: number;
    geolocation_enabled: boolean;
    taxonomies: string[];
};

export declare type SystemStatusSecurity = {
    secure_connection: boolean;
    hide_errors: boolean;
};

export declare type ListSystemStatusRequestType = {};
