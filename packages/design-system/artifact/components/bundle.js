/* @ds-bundle: {"format":4,"namespace":"LetterOn","components":[{"name":"Icon"},{"name":"Wordmark"},{"name":"Button"},{"name":"IconButton"},{"name":"TextField"},{"name":"SearchField"},{"name":"Badge"},{"name":"Chip"},{"name":"FilterButton"},{"name":"Menu"},{"name":"SegmentedControl"},{"name":"NavItem"},{"name":"Avatar"},{"name":"TypeTag"},{"name":"BookmarkCard"},{"name":"Alert"},{"name":"Toast"},{"name":"Dialog"},{"name":"EmptyState"},{"name":"Skeleton"},{"name":"SkeletonBookmark"},{"name":"Kbd"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  function cx() {
    return Array.prototype.filter.call(arguments, Boolean).join(" ");
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) out[k] = obj[k];
    return out;
  }
  var seq = 0;
  function useId(given) {
    var ref = React.useRef(null);
    if (ref.current === null) ref.current = given || "lo-" + ++seq;
    return ref.current;
  }

  /* ---------- Icons: 2px round stroke, 24px grid, drawn in currentColor ---------- */
  var ICONS = {
    bookmark: ["M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"],
    archive: ["M3 4h18v4H3z", "M5 8v12h14V8", "M10 12h4"],
    unarchive: ["M3 4h18v4H3z", "M5 8v12h14V8", "M12 17v-6", "m9 14 3-3 3 3"],
    trash: ["M3 6h18", "M8 6V4h8v2", "M6 6l1 14h10l1-14"],
    search: ["M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z", "m21 21-4.3-4.3"],
    plus: ["M12 5v14", "M5 12h14"],
    x: ["M18 6 6 18", "m6 6 12 12"],
    check: ["M20 6 9 17l-5-5"],
    "chevron-down": ["m6 9 6 6 6-6"],
    "chevron-up": ["m18 15-6-6-6 6"],
    "arrow-left": ["M19 12H5", "m12 19-7-7 7-7"],
    list: ["M8 6h13", "M8 12h13", "M8 18h13", "M3 6h.01", "M3 12h.01", "M3 18h.01"],
    grid: ["M4 4h7v7H4z", "M13 4h7v7h-7z", "M4 13h7v7H4z", "M13 13h7v7h-7z"],
    folder: ["M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"],
    hash: ["M4 9h16", "M4 15h16", "M10 3 8 21", "M16 3l-2 18"],
    mail: ["M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z", "m22 7-10 7L2 7"],
    alert: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 8v4", "M12 16h.01"],
    clock: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 6v6l4 2"],
    refresh: ["M21 12a9 9 0 1 1-3-6.7L21 8", "M21 3v5h-5"],
    logout: ["M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", "m16 17 5-5-5-5", "M21 12H9"],
    sun: ["M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M12 2v2", "M12 20v2", "m4.9 4.9 1.4 1.4", "m17.7 17.7 1.4 1.4", "M2 12h2", "M20 12h2", "m4.9 19.1 1.4-1.4", "m17.7 6.3 1.4-1.4"],
    moon: ["M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"],
    monitor: ["M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", "M8 21h8", "M12 17v4"],
    download: ["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "m7 10 5 5 5-5", "M12 15V3"],
    external: ["M15 3h6v6", "M10 14 21 3", "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"],
    keyboard: ["M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z", "M6 10h.01", "M10 10h.01", "M14 10h.01", "M18 10h.01", "M7 14h10"],
    menu: ["M3 6h18", "M3 12h18", "M3 18h18"],
    video: ["M6 5h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4z", "m10 9 5 3-5 3z"],
    post: ["M4 4l16 16", "M20 4 4 20"],
    article: ["M7 3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z", "M8 8h8", "M8 12h8", "M8 16h5"],
    link: ["M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1", "M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"]
  };
  function Icon(props) {
    var paths = ICONS[props.name] || ICONS.bookmark;
    var size = props.size || 18;
    return h(
      "svg",
      {
        className: cx("lo-icon", props.className),
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        role: props.label ? "img" : undefined,
        "aria-label": props.label || undefined,
        "aria-hidden": props.label ? undefined : "true"
      },
      paths.map(function (d, i) { return h("path", { key: i, d: d }); })
    );
  }
  function icon(x, size) {
    if (!x) return null;
    return typeof x === "string" ? h(Icon, { name: x, size: size }) : x;
  }

  function Wordmark(props) {
    return h("span", { className: cx("lo-wordmark", "lo-wordmark-" + (props.size || "md"), props.className) }, "LetterOn");
  }

  /* ---------- Actions ---------- */
  function Button(props) {
    var variant = props.variant || "secondary";
    var size = props.size || "md";
    var rest = omit(props, ["variant", "size", "icon", "block", "className", "children"]);
    var tag = props.href ? "a" : "button";
    return h(
      tag,
      Object.assign(tag === "button" ? { type: "button" } : {}, rest, {
        className: cx("lo-btn", "lo-btn-" + variant, "lo-btn-" + size, props.block && "lo-btn-block", props.className)
      }),
      props.icon ? h("span", { className: "lo-btn-icon", "aria-hidden": "true" }, icon(props.icon, 18)) : null,
      props.children
    );
  }

  function IconButton(props) {
    var variant = props.variant || "ghost";
    var size = props.size || "md";
    var rest = omit(props, ["variant", "size", "icon", "label", "tone", "className"]);
    var tag = props.href ? "a" : "button";
    return h(
      tag,
      Object.assign(tag === "button" ? { type: "button" } : {}, rest, {
        className: cx("lo-iconbtn", "lo-iconbtn-" + variant, "lo-iconbtn-" + size, props.tone === "danger" && "lo-iconbtn-danger", props.className),
        "aria-label": props.label,
        title: props.label
      }),
      icon(props.icon, size === "sm" ? 16 : 20)
    );
  }

  /* ---------- Forms ---------- */
  function TextField(props) {
    var id = useId(props.id);
    var hintId = id + "-hint";
    var rest = omit(props, ["label", "hint", "error", "multiline", "actionLabel", "actionHref", "className", "id"]);
    var message = props.error || props.hint;
    var control = h(
      props.multiline ? "textarea" : "input",
      Object.assign({}, rest, {
        id: id,
        className: "lo-field-control",
        "aria-invalid": props.error ? "true" : undefined,
        "aria-describedby": message ? hintId : undefined
      })
    );
    return h(
      "div",
      { className: cx("lo-field", props.error && "lo-field-error", props.disabled && "lo-field-disabled", props.className) },
      h(
        "div",
        { className: "lo-field-top" },
        h("label", { className: "lo-field-label", htmlFor: id }, props.label),
        props.actionLabel ? h("a", { className: "lo-field-action", href: props.actionHref || "#" }, props.actionLabel) : null
      ),
      control,
      message
        ? h("p", { id: hintId, className: "lo-field-hint" }, props.error ? h(Icon, { name: "alert", size: 14 }) : null, props.error || props.hint)
        : null
    );
  }

  function SearchField(props) {
    var rest = omit(props, ["label", "className"]);
    return h(
      "label",
      { className: cx("lo-search", props.className) },
      h(Icon, { name: "search", size: 18 }),
      h("span", { className: "lo-sr" }, props.label || "Search"),
      h("input", Object.assign({ type: "search" }, rest, { className: "lo-search-input" }))
    );
  }

  /* ---------- Status ---------- */
  function Badge(props) {
    var tone = props.tone || "neutral";
    return h("span", { className: cx("lo-badge", "lo-badge-" + tone, props.className) }, props.children);
  }

  function initials(name) {
    return (name || "?")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function (p) { return p.charAt(0).toUpperCase(); })
      .join("");
  }
  var AVATAR_TONES = ["coral", "sun", "mint"];
  function Avatar(props) {
    var size = props.size || "md";
    var name = props.name || "";
    var code = 0;
    for (var i = 0; i < name.length; i++) code += name.charCodeAt(i);
    var tone = props.tone || AVATAR_TONES[code % AVATAR_TONES.length];
    return h(
      "span",
      { className: cx("lo-avatar", "lo-avatar-" + size, "lo-avatar-" + tone, props.className), role: "img", "aria-label": name },
      props.src ? h("img", { src: props.src, alt: "" }) : initials(name)
    );
  }

  /* ---------- Filters ---------- */
  function Chip(props) {
    var rest = omit(props, ["selected", "count", "icon", "onRemove", "className", "children"]);
    if (props.onRemove) {
      return h(
        "span",
        { className: cx("lo-chip lo-chip-on lo-chip-removable", props.className) },
        props.children,
        h("button", { type: "button", className: "lo-chip-x", onClick: props.onRemove, "aria-label": "Remove filter " + props.children }, h(Icon, { name: "x", size: 16 }))
      );
    }
    return h(
      "button",
      Object.assign({ type: "button" }, rest, {
        className: cx("lo-chip", props.selected && "lo-chip-on", props.className),
        "aria-pressed": props.selected ? "true" : "false"
      }),
      props.icon ? h("span", { className: "lo-chip-icon", "aria-hidden": "true" }, icon(props.icon, 16)) : null,
      props.children,
      props.count != null ? h("span", { className: "lo-chip-count" }, props.count) : null
    );
  }

  function FilterButton(props) {
    var rest = omit(props, ["label", "value", "open", "className"]);
    return h(
      "button",
      Object.assign({ type: "button" }, rest, {
        className: cx("lo-chip", "lo-filter", props.value && "lo-chip-on", props.className),
        "aria-haspopup": "true",
        "aria-expanded": props.open ? "true" : "false"
      }),
      props.value ? props.label + ": " + props.value : props.label,
      h("span", { className: "lo-chip-icon", "aria-hidden": "true" }, h(Icon, { name: props.open ? "chevron-up" : "chevron-down", size: 16 }))
    );
  }

  function Menu(props) {
    if (props.open === false) return null;
    var items = props.items || [];
    return h(
      "div",
      { className: cx("lo-menu", props.className), role: "group", "aria-label": props.label },
      items.map(function (it, i) {
        return h(
          "label",
          { key: it.value || i, className: cx("lo-menu-item", it.checked && "lo-menu-item-on") },
          h("input", { type: "checkbox", className: "lo-menu-check", defaultChecked: !!it.checked }),
          it.icon ? icon(it.icon, 18) : null,
          h("span", { className: "lo-menu-label" }, it.label),
          it.count != null ? h("span", { className: "lo-menu-count" }, it.count) : null
        );
      })
    );
  }

  function SegmentedControl(props) {
    var options = props.options || [];
    return h(
      "div",
      { className: cx("lo-seg", props.className), role: "group", "aria-label": props.label },
      options.map(function (o) {
        var on = o.value === props.value;
        return h(
          "button",
          {
            key: o.value,
            type: "button",
            className: "lo-seg-btn",
            "aria-pressed": on ? "true" : "false",
            "aria-label": props.iconOnly ? o.label : undefined,
            title: props.iconOnly ? o.label : undefined,
            onClick: props.onChange ? function () { props.onChange(o.value); } : undefined
          },
          o.icon ? icon(o.icon, 16) : null,
          props.iconOnly ? null : o.label
        );
      })
    );
  }

  /* ---------- Navigation ---------- */
  function NavItem(props) {
    var tag = props.href ? "a" : "button";
    var rest = omit(props, ["icon", "dot", "label", "count", "countTone", "current", "className"]);
    return h(
      tag,
      Object.assign(tag === "button" ? { type: "button" } : {}, rest, {
        className: cx("lo-nav-item", props.className),
        "aria-current": props.current ? "page" : undefined
      }),
      props.dot ? h("span", { className: "lo-nav-dot", style: { background: "var(--" + props.dot + ")" }, "aria-hidden": "true" }) : icon(props.icon, 18),
      h("span", { className: "lo-nav-label" }, props.label),
      props.count != null ? h("span", { className: cx("lo-nav-count", props.countTone === "sun" && "lo-nav-count-sun") }, props.count) : null
    );
  }

  /* ---------- Bookmarks ---------- */
  var TYPES = {
    video: { label: "Video" },
    post: { label: "X post" },
    article: { label: "Article" },
    link: { label: "Link" }
  };
  function TypeTag(props) {
    var type = TYPES[props.type] ? props.type : "link";
    return h("span", { className: "lo-type lo-type-" + type }, h("span", { className: "lo-type-icon" }, h(Icon, { name: type, size: 14 })), TYPES[type].label);
  }

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  /** "Just now", "12m ago", "3h ago", "2d ago" up to 7 days, then "Sep 12", and "Sep 12, 2025" for past years. */
  function formatAddedAt(value, now) {
    if (!value) return "";
    var d = value instanceof Date ? value : new Date(value);
    if (isNaN(d.getTime())) return String(value);
    var n = now ? new Date(now) : new Date();
    var s = Math.floor((n.getTime() - d.getTime()) / 1000);
    if (s < 60) return "Just now";
    var m = Math.floor(s / 60);
    if (m < 60) return m + "m ago";
    var hr = Math.floor(m / 60);
    if (hr < 24) return hr + "h ago";
    var dy = Math.floor(hr / 24);
    if (dy < 7) return dy + "d ago";
    var label = MONTHS[d.getMonth()] + " " + d.getDate();
    return d.getFullYear() === n.getFullYear() ? label : label + ", " + d.getFullYear();
  }
  /** 8 → "8 min read". */
  function formatReadingTime(minutes) {
    return minutes ? Math.max(1, Math.round(minutes)) + " min read" : "";
  }

  function BookmarkCard(props) {
    var layout = props.layout || "grid";
    var type = TYPES[props.type] ? props.type : "link";
    var length = type === "video" ? props.duration : type === "article" ? formatReadingTime(props.readingTime) : null;
    var meta = [props.source, length, formatAddedAt(props.addedAt, props.now)].filter(Boolean).join(" · ");
    var excerpt = type === "article" || type === "post" ? props.excerpt : null;
    var opens = !!(props.href || props.onOpen);
    var title = props.href
      ? h("a", { className: "lo-bm-title lo-bm-open", href: props.href }, props.title)
      : props.onOpen
      ? h("button", { type: "button", className: "lo-bm-title lo-bm-open", onClick: props.onOpen }, props.title)
      : h("p", { className: "lo-bm-title" }, props.title);
    var actions =
      props.onArchive || props.onDelete
        ? h(
            "div",
            { className: "lo-bm-actions" },
            props.onArchive
              ? h(IconButton, { icon: props.archived ? "unarchive" : "archive", label: props.archived ? "Unarchive" : "Archive", variant: "secondary", size: "sm", onClick: props.onArchive })
              : null,
            props.onDelete ? h(IconButton, { icon: "trash", label: "Delete", variant: "secondary", size: "sm", tone: "danger", onClick: props.onDelete }) : null
          )
        : null;
    return h(
      "article",
      {
        className: cx(
          "lo-bm",
          "lo-bm-" + layout,
          opens && "lo-bm-opens",
          props.archived && "lo-bm-archived",
          props.showActions && "lo-bm-show-actions",
          props.className
        )
      },
      h(
        "div",
        { className: "lo-bm-thumb lo-thumb-" + type, "aria-hidden": "true" },
        props.thumbnail ? h("img", { src: props.thumbnail, alt: "" }) : h("span", { className: "lo-bm-glyph" }, h(Icon, { name: type, size: layout === "grid" ? 36 : 24 }))
      ),
      h(
        "div",
        { className: "lo-bm-body" },
        h(
          "div",
          { className: "lo-bm-kicker" },
          h(TypeTag, { type: type }),
          props.collection ? h("span", { className: "lo-bm-coll" }, props.collection) : null,
          props.archived ? h(Badge, { tone: "mint" }, "Archived") : null
        ),
        title,
        meta ? h("p", { className: "lo-bm-meta" }, meta) : null,
        excerpt ? h("p", { className: "lo-bm-excerpt" }, excerpt) : null,
        props.tags && props.tags.length
          ? h("div", { className: "lo-bm-tags" }, props.tags.map(function (t) { return h("span", { key: t, className: "lo-bm-tag" }, "#" + t); }))
          : null
      ),
      actions
    );
  }

  /* ---------- Feedback ---------- */
  var ALERT_ICONS = { error: "alert", info: "mail", success: "check" };
  function Alert(props) {
    var tone = props.tone || "info";
    return h(
      "div",
      { className: cx("lo-alert", "lo-alert-" + tone, props.className), role: tone === "error" ? "alert" : "status" },
      h("span", { className: "lo-alert-icon" }, icon(props.icon || ALERT_ICONS[tone], 18)),
      h(
        "div",
        { className: "lo-alert-body" },
        props.title ? h("p", { className: "lo-alert-title" }, props.title) : null,
        props.children ? h("div", { className: "lo-alert-text" }, props.children) : null
      )
    );
  }

  function Toast(props) {
    return h(
      "div",
      { className: cx("lo-toast", props.className), role: "status" },
      h("span", { className: "lo-toast-icon" }, h(Icon, { name: props.icon || "check", size: 16 })),
      h("div", { className: "lo-toast-body" }, h("strong", null, props.title), props.children ? h("span", null, props.children) : null),
      props.actionLabel ? h(Button, { variant: "ghost", size: "sm", onClick: props.onAction }, props.actionLabel) : null
    );
  }

  function Dialog(props) {
    var id = useId(props.id);
    if (props.open === false) return null;
    return h(
      "div",
      { className: cx("lo-scrim", props.className) },
      h(
        "div",
        { className: "lo-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": id },
        props.icon ? h("span", { className: cx("lo-dialog-icon", props.tone === "danger" && "lo-dialog-icon-danger") }, icon(props.icon, 24)) : null,
        h("h2", { id: id, className: "lo-dialog-title" }, props.title),
        props.description ? h("p", { className: "lo-dialog-text" }, props.description) : null,
        props.children ? h("div", { className: "lo-dialog-body" }, props.children) : null,
        h(
          "div",
          { className: "lo-dialog-actions" },
          h(Button, { onClick: props.onCancel }, props.cancelLabel || "Cancel"),
          h(Button, { variant: "primary", onClick: props.onConfirm }, props.confirmLabel || "Confirm")
        )
      )
    );
  }

  function EmptyState(props) {
    var size = props.size || "md";
    return h(
      "div",
      { className: cx("lo-empty", "lo-empty-" + size, props.className) },
      h("span", { className: cx("lo-empty-icon", "lo-empty-icon-" + (props.tone || "coral")) }, icon(props.icon || "bookmark", size === "lg" ? 40 : 28)),
      h(size === "lg" ? "h2" : "h3", { className: "lo-empty-title" }, props.title),
      props.description ? h("p", { className: "lo-empty-text" }, props.description) : null,
      props.children ? h("div", { className: "lo-empty-actions" }, props.children) : null
    );
  }

  function Skeleton(props) {
    return h("span", {
      className: cx("lo-skel", "lo-skel-" + (props.radius || "full"), props.className),
      style: { width: props.width || "100%", height: props.height || 12 },
      "aria-hidden": "true"
    });
  }
  function SkeletonBookmark(props) {
    var layout = props.layout || "list";
    return h(
      "div",
      { className: cx("lo-bm", "lo-bm-" + layout, "lo-bm-skel"), "aria-hidden": "true" },
      h(Skeleton, { className: "lo-bm-thumb", radius: layout === "grid" ? "lg" : "sm", width: layout === "grid" ? "100%" : 96, height: layout === "grid" ? "auto" : 64 }),
      h(
        "div",
        { className: "lo-bm-body" },
        h(Skeleton, { width: 72, height: 10 }),
        h(Skeleton, { width: props.titleWidth || "70%", height: 14 }),
        h(Skeleton, { width: "40%", height: 10 })
      )
    );
  }

  function Kbd(props) {
    return h("kbd", { className: cx("lo-kbd", props.className) }, props.children);
  }

  window.LetterOn = Object.assign(window.LetterOn || {}, {
    Icon: Icon,
    Wordmark: Wordmark,
    Button: Button,
    IconButton: IconButton,
    TextField: TextField,
    SearchField: SearchField,
    Badge: Badge,
    Avatar: Avatar,
    Chip: Chip,
    FilterButton: FilterButton,
    Menu: Menu,
    SegmentedControl: SegmentedControl,
    NavItem: NavItem,
    TypeTag: TypeTag,
    BookmarkCard: BookmarkCard,
    Alert: Alert,
    Toast: Toast,
    Dialog: Dialog,
    EmptyState: EmptyState,
    Skeleton: Skeleton,
    SkeletonBookmark: SkeletonBookmark,
    Kbd: Kbd,
    formatAddedAt: formatAddedAt,
    formatReadingTime: formatReadingTime,
    iconNames: Object.keys(ICONS)
  });
})();
