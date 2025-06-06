﻿using System.ComponentModel.DataAnnotations.Schema;

namespace FileEncryption.Api.Models
{
    public class SharePostModel
    {
        public int FileKey { get; set; }
        public DateTime ExpiresAt { get; set; }
        public required string RecipientEmail { get; set; }
    }
}
