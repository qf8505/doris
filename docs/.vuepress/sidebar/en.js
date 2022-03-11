/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = [
  {
    title: "Downloads",
    directoryPath: "downloads/",
    initialOpenGroupIndex: -1,
    children: ["downloads"],
    sidebarDepth: 1,
  },
  {
    title: "Compilation and Deployment",
    directoryPath: "installing/",
    initialOpenGroupIndex: -1,
    children: [
      "compilation",
      "compilation-with-ldb-toolchain",
      "compilation-arm",
      "install-deploy",
      "upgrade",
    ],
  },
  {
    title: "Getting Started",
    directoryPath: "getting-started/",
    initialOpenGroupIndex: -1,
    children: [
      "basic-usage",
      "advance-usage",
      "data-model-rollup",
      "data-partition",
      "hit-the-rollup",
      "best-practice",
    ],
  },
  {
    title: "Administrator Guide",
    directoryPath: "administrator-guide/",
    initialOpenGroupIndex: -1,
    children: [
      {
        title: "Load Data",
        directoryPath: "load-data/",
        initialOpenGroupIndex: -1,
        children: [
          "load-manual",
          "batch-delete-manual",
          "binlog-load-manual",
          "broker-load-manual",
          "routine-load-manual",
          "sequence-column-manual",
          "spark-load-manual",
          "stream-load-manual",
          "s3-load-manual",
          "delete-manual",
          "insert-into-manual",
          "load-json-format",
        ],
        sidebarDepth: 2,
      },
      {
        title: "Schema Change",
        directoryPath: "alter-table/",
        initialOpenGroupIndex: -1,
        children: [
          "alter-table-bitmap-index",
          "alter-table-replace-table",
          "alter-table-rollup",
          "alter-table-schema-change",
          "alter-table-temp-partition",
        ],
        sidebarDepth: 2,
      },
      "materialized_view",
      {
        title: "HTTP API",
        directoryPath: "http-actions/",
        initialOpenGroupIndex: -1,
        children: [
          {
            title: "FE",
            directoryPath: "fe/",
            initialOpenGroupIndex: -1,
            children: [
              {
                title: "MANAGER",
                directoryPath: "manager/",
                initialOpenGroupIndex: -1,
                children: [
                  "cluster-action",
                  "node-action",
                  "query-profile-action",
                ],
              },
              "backends-action",
              "bootstrap-action",
              "cancel-load-action",
              "check-decommission-action",
              "check-storage-type-action",
              "config-action",
              "connection-action",
              "get-ddl-stmt-action",
              "get-load-info-action",
              "get-load-state",
              "get-log-file-action",
              "get-small-file",
              "ha-action",
              "hardware-info-action",
              "health-action",
              "log-action",
              "logout-action",
              "meta-action",
              "meta-info-action",
              "meta-replay-state-action",
              "profile-action",
              "query-detail-action",
              "query-profile-action",
              "row-count-action",
              "session-action",
              "set-config-action",
              "show-data-action",
              "show-meta-info-action",
              "show-proc-action",
              "show-runtime-info-action",
              "statement-execution-action",
              "system-action",
              "table-query-plan-action",
              "table-row-count-action",
              "table-schema-action",
              "upload-action",
            ],
          },
          "cancel-label",
          "check-reset-rpc-cache",
          "compaction-action",
          "connection-action",
          "fe-get-log-file",
          "get-load-state",
          "get-tablets",
          "profile-action",
          "query-detail-action",
          "restore-tablet",
          "show-data-action",
          "tablet-migration-action",
          "tablets_distribution",
        ],
        sidebarDepth: 1,
      },
      {
        title: "Maintainence Operation",
        directoryPath: "operation/",
        initialOpenGroupIndex: -1,
        children: [
          "doris-error-code",
          "be-olap-error-code",
          "disk-capacity",
          "metadata-operation",
          "monitor-alert",
          "multi-tenant",
          "tablet-meta-tool",
          "tablet-repair-and-balance",
          "tablet-restore-tool",
          {
            title: "Metrics",
            directoryPath: "monitor-metrics/",
            initialOpenGroupIndex: -1,
            children: [
              "be-metrics",
              "fe-metrics",
            ],
          },
        ],
        sidebarDepth: 2,
      },
      {
        title: "Configuration",
        directoryPath: "config/",
        initialOpenGroupIndex: -1,
        children: [
          "be_config",
          "fe_config",
          "user_property",
        ],
        sidebarDepth: 1,
      },
      {
        title: "Block Rule",
        directoryPath: "block-rule/",
        initialOpenGroupIndex: -1,
        children: [
          "sql-block",
        ],
        sidebarDepth: 1,
      },
      "backup-restore",
      "bloomfilter",
      "broker",
      "colocation-join",
      "bucket-shuffle-join",
      "vectorized-execution-engine",
      "dynamic-partition",
      "export-manual",
      "export_with_mysql_dump",
      "outfile",
      "privilege",
      "ldap",
      "resource-management",
      "running-profile",
      "runtime-filter",
      "small-file-mgr",
      "sql-mode",
      "time-zone",
      "variables",
      "update",
      "multi-tenant",
      "orthogonal-bitmap-manual",
    ],
    sidebarDepth: 1,
  },
  {
    title: "Benchmark & Sample",
    directoryPath: "benchmark/",
    initialOpenGroupIndex: -1,
    children: [
      "star-schema-benchmark",
      "systemd",
      "samples"
    ],
  },
  {
    title: "Extending Ability",
    directoryPath: "extending-doris/",
    initialOpenGroupIndex: -1,
    children: [
      "audit-plugin",
      "doris-on-es",
      "logstash",
      "odbc-of-doris",
      "hive-of-doris",
      "iceberg-of-doris",
      "plugin-development-manual",
      "spark-doris-connector",
      "flink-doris-connector",
      "datax",
      {
        title: "Seatunnel",
        directoryPath: "seatunnel/",
        initialOpenGroupIndex: -1,
        children: [
          "spark-sink",
          "flink-sink",
        ],
      },
      {
        title: "UDF",
        directoryPath: "udf/",
        initialOpenGroupIndex: -1,
        children: [
          "contribute-udf",
          "native-user-defined-function",
          "remote-user-defined-function",
        ],
      },
    ],
  },
  {
    title: "Design Documents",
    directoryPath: "internal/",
    initialOpenGroupIndex: -1,
    children: [
      "doris_storage_optimization",
      "grouping_sets_design",
      "metadata-design",
    ],
  },
  {
    title: "SQL Manual",
    directoryPath: "sql-reference/",
    initialOpenGroupIndex: -1,
    children: [
      {
        title: "SQL Functions",
        directoryPath: "sql-functions/",
        initialOpenGroupIndex: -1,
        children: [
          {
            title: "Date Time Functions",
            directoryPath: "date-time-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "convert_tz",
              "curdate",
              "current_timestamp",
              "curtime",
              "date_add",
              "date_format",
              "date_sub",
              "datediff",
              "day",
              "dayname",
              "dayofmonth",
              "dayofweek",
              "dayofyear",
              "from_days",
              "from_unixtime",
              "hour",
              "makedate",
              "minute",
              "month",
              "monthname",
              "now",
              "second",
              "str_to_date",
              "time_round",
              "timediff",
              "timestampadd",
              "timestampdiff",
              "to_days",
              "unix_timestamp",
              "utc_timestamp",
              "week",
              "weekday",
              "weekofyear",
              "year",
              "yearweek",
            ],
          },
          {
            title: "Sptial Functions",
            directoryPath: "spatial-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "st_astext",
              "st_circle",
              "st_contains",
              "st_distance_sphere",
              "st_geometryfromtext",
              "st_linefromtext",
              "st_point",
              "st_polygon",
              "st_x",
              "st_y",
            ],
          },
          {
            title: "String Functions",
            directoryPath: "string-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "append_trailing_char_if_absent",
              "ascii",
              "bit_length",
              "char_length",
              "coalesce",
              "concat",
              "concat_ws",
              "ends_with",
              "find_in_set",
              "hex",
              "instr",
              "lcase",
              "left",
              "length",
              "locate",
              "lower",
              "lpad",
              "ltrim",
              "money_format",
              "null_or_empty",
              "repeat",
              "replace",
              "reverse",
              "right",
              "rpad",
              "split_part",
              "starts_with",
              "strleft",
              "strright",
              "substring",
              "unhex",
              {
                title: "fuzzy match",
                directoryPath: "like/",
                initialOpenGroupIndex: -1,
                children: [
                  "like",
                  "not_like",
                ],
              },
              {
                title: "regular match",
                directoryPath: "regexp/",
                initialOpenGroupIndex: -1,
                children: [
                  "regexp",
                  "regexp_extract",
                  "regexp_replace",
                  "not_regexp",
                ],
              },
            ],
          },
          {
            title: "Aggregate Functions",
            directoryPath: "aggregate-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "approx_count_distinct",
              "avg",
              "bitmap_union",
              "count",
              "group_concat",
              "hll_union_agg",
              "max",
              "min",
              "percentile",
              "percentile_approx",
              "stddev",
              "stddev_samp",
              "sum",
              "topn",
              "var_samp",
              "variance",
            ],
          },
          {
            title: "bitmap functions",
            directoryPath: "bitmap-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "bitmap_and",
              "bitmap_contains",
              "bitmap_empty",
              "bitmap_from_string",
              "bitmap_has_any",
              "bitmap_has_all",
              "bitmap_hash",
              "bitmap_intersect",
              "bitmap_or",
              "bitmap_and_count",
              "bitmap_or_count",
              "bitmap_xor",
              "bitmap_xor_count",
              "bitmap_not",
              "bitmap_and_not",
              "bitmap_and_not_count",
              "bitmap_subset_in_range",
              "bitmap_subset_limit",
              "sub_bitmap",
              "bitmap_to_string",
              "bitmap_union",
              "bitmap_xor",
              "to_bitmap",
              "bitmap_max",
              "orthogonal_bitmap_intersect",
              "orthogonal_bitmap_intersect_count",
              "orthogonal_bitmap_union_count",
            ],
          },
          {
            title: "bitwise function",
            directoryPath: "bitwise-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "bitand",
              "bitor",
              "bitxor",
              "bitnot",
              "bit_length"
            ],
          },
          {
            title: "conditional function",
            directoryPath: "conditional-functions/",
            children: [
              "case",
              "coalesce",
              "if",
              "ifnull",
              "nullif"
            ],
          },
          {
            title: "json function",
            directoryPath: "json-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "get_json_double",
              "get_json_int",
              "get_json_string",
              "json_array",
              "json_object",
              "json_quote",
            ],
          },
          {
            title: "Encryption and Digest Functions",
            directoryPath: "encrypt-digest-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "aes",
              "md5",
              "md5sum",
              "sm4",
              "sm3",
              "sm3sum"
            ],
          },
          {
            title: "Hash Functions",
            directoryPath: "hash-functions/",
            initialOpenGroupIndex: -1,
            children: ["murmur_hash3_32"],
          },
          {
            title: "Math Functions",
            directoryPath: "math-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "conv",
              "pmod"
            ],
          },
          {
            title: "table functions",
            directoryPath: "table-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "explode-bitmap",
              "explode-split",
              "explode-json-array"
            ],
          },
          "window-function",
          "cast",
          "digital-masking",
        ],
      },
      {
        title: "SQL Statements",
        directoryPath: "sql-statements/",
        initialOpenGroupIndex: -1,
        children: [
          {
            title: "Account Management",
            directoryPath: "Account Management/",
            initialOpenGroupIndex: -1,
            children: [
              "CREATE ROLE",
              "CREATE USER",
              "DROP ROLE",
              "DROP USER",
              "GRANT",
              "REVOKE",
              "SET PASSWORD",
              "SET PROPERTY",
              "SHOW GRANTS",
              "SHOW ROLES",
            ],
          },
          {
            title: "Administration",
            directoryPath: "Administration/",
            initialOpenGroupIndex: -1,
            children: [
              "ADMIN CANCEL REPAIR",
              "ADMIN CLEAN TRASH",
              "ADMIN CHECK TABLET",
              "ADMIN COMPACT",
              "ADMIN REPAIR",
              "ADMIN SET CONFIG",
              "ADMIN SET REPLICA STATUS",
              "ADMIN SHOW CONFIG",
              "ADMIN SHOW REPLICA DISTRIBUTION",
              "ADMIN SHOW REPLICA STATUS",
              "ALTER CLUSTER",
              "ALTER SYSTEM",
              "CANCEL DECOMMISSION",
              "CREATE CLUSTER",
              "CREATE FILE",
              "DROP CLUSTER",
              "DROP FILE",
              "ENTER",
              "INSTALL PLUGIN",
              "LINK DATABASE",
              "MIGRATE DATABASE",
              "SET LDAP_ADMIN_PASSWORD",
              "SHOW BACKENDS",
              "SHOW BROKER",
              "SHOW FILE",
              "SHOW FRONTENDS",
              "SHOW FULL COLUMNS",
              "SHOW INDEX",
              "SHOW MIGRATIONS",
              "SHOW PLUGINS",
              "SHOW TABLE STATUS",
              "SHOW TRASH",
              "UNINSTALL PLUGIN",
            ],
          },
          {
            title: "Data Definition",
            directoryPath: "Data Definition/",
            initialOpenGroupIndex: -1,
            children: [
              "ALTER DATABASE",
              "ALTER TABLE",
              "ALTER VIEW",
              "BACKUP",
              "CANCEL ALTER",
              "CANCEL BACKUP",
              "CREATE ENCRYPTKEY",
              "CANCEL RESTORE",
              "CREATE DATABASE",
              "CREATE INDEX",
              "CREATE MATERIALIZED VIEW",
              "CREATE REPOSITORY",
              "CREATE TABLE LIKE",
              "CREATE TABLE",
              "CREATE VIEW",
              "Colocate Join",
              "DROP DATABASE",
              "DROP ENCRYPTKEY",
              "DROP INDEX",
              "DROP MATERIALIZED VIEW",
              "DROP REPOSITORY",
              "DROP TABLE",
              "DROP VIEW",
              "HLL",
              "RECOVER",
              "REFRESH DATABASE",
              "REFRESH TABLE",
              "RESTORE",
              "SHOW ENCRYPTKEYS",
              "TRUNCATE TABLE",
              "create-function",
              "drop-function",
              "show-functions",
            ],
          },
          {
            title: "Data Manipulation",
            directoryPath: "Data Manipulation/",
            initialOpenGroupIndex: -1,
            children: [
              "BEGIN",
              "BROKER LOAD",
              "CANCEL DELETE",
              "CANCEL LABEL",
              "CANCEL LOAD",
              "CREATE SYNC JOB",
              "DELETE",
              "EXPORT",
              "GET LABEL STATE",
              "GROUP BY",
              "LOAD",
              "MINI LOAD",
              "MULTI LOAD",
              "OUTFILE",
              "PAUSE ROUTINE LOAD",
              "PAUSE SYNC JOB",
              "RESTORE TABLET",
              "RESUME ROUTINE LOAD",
              "RESUME SYNC JOB",
              "ROUTINE LOAD",
              "SHOW ALTER",
              "SHOW BACKUP",
              "SHOW CREATE FUNCTION",
              "SHOW CREATE ROUTINE LOAD",
              "SHOW DATA",
              "SHOW DATA SKEW",
              "SHOW DATABASES",
              "SHOW DELETE",
              "SHOW DYNAMIC PARTITION TABLES",
              "SHOW EXPORT",
              "SHOW LOAD",
              "SHOW PARTITIONS",
              "SHOW PROPERTY",
              "SHOW REPOSITORIES",
              "SHOW RESTORE",
              "SHOW ROUTINE LOAD TASK",
              "SHOW ROUTINE LOAD",
              "SHOW SNAPSHOT",
              "SHOW SYNC JOB",
              "SHOW TABLES",
              "SHOW TABLE CREATION",
              "SHOW TABLET",
              "SHOW TRANSACTION",
              "SHOW-LAST-INSERT",
              "STOP ROUTINE LOAD",
              "STOP SYNC JOB",
              "STREAM LOAD",
              "alter-routine-load",
              "insert",
              "UPDATE",
              "lateral-view",
            ],
          },
          {
            title: "Data Types",
            directoryPath: "Data Types/",
            initialOpenGroupIndex: -1,
            children: [
              "BIGINT",
              "BITMAP",
              "BOOLEAN",
              "CHAR",
              "DATE",
              "DATETIME",
              "DECIMAL",
              "DOUBLE",
              "FLOAT",
              "HLL",
              "INT",
              "SMALLINT",
              "STRING",
              "TINYINT",
              "VARCHAR",
            ],
          },
          {
            title: "Utility",
            directoryPath: "Utility/",
            initialOpenGroupIndex: -1,
            children: ["util_stmt"],
          },
        ],
      },
    ],
  },
  {
    title: "Doris User",
    directoryPath: "case-user/",
    initialOpenGroupIndex: -1,
    children: [
      "case-user",
    ],
  },
  {
    title: "Developer Guide",
    directoryPath: "developer-guide/",
    initialOpenGroupIndex: -1,
    children: [
      "debug-tool",
      "docker-dev",
      "benchmark-tool",
      "fe-eclipse-dev",
      "fe-idea-dev",
      "be-vscode-dev",
      "java-format-code",
      "cpp-format-code",
      "How-to-Share-blogs",
      "minidump",
      "bitmap-hll-file-format",
    ],
  },
  {
    title: "FAQ",
    directoryPath: "faq/",
    initialOpenGroupIndex: -1,
    children: [
      "faq",
      "error"
    ],
  },
  {
    title: "Apache Community",
    directoryPath: "community/",
    initialOpenGroupIndex: -1,
    children: [
      "team",
      "gitter",
      "subscribe-mail-list",
      "feedback",
      {
          title: "How to Contribute",
          directoryPath: "how-to-contribute/",
          initialOpenGroupIndex: -1,
          children: [
              "how-to-contribute",
              "committer-guide",
              "commit-format-specification",
              "pull-request",
          ],
      },
      {
          title: "Release Process & Verification",
          directoryPath: "release-and-verify/",
          initialOpenGroupIndex: -1,
          children: [
              "release-prepare",
              "release-doris-core",
              "release-doris-connectors",
              "release-complete",
              "release-verify",
          ],
      },
      "security",
    ],
  },
]
